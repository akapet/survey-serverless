using System.Collections.Generic;
using System.Net;

using Amazon.Lambda.Core;
using Amazon.Lambda.APIGatewayEvents;
using Newtonsoft.Json;
using System.Linq;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace SurveyServerless
{
    public class Functions
    {
        /// <summary>
        /// Default constructor that Lambda will invoke.
        /// </summary>
        public Functions()
        {
            
        }

        /// <summary>
        /// Get list of questions from API Gateway
        /// </summary>
        /// <param name="request"></param>
        /// <returns>The list of questions</returns>
        public APIGatewayProxyResponse GetQuestions(APIGatewayProxyRequest request, ILambdaContext context)
        {
            Log(context, "Get all questions request\n");

            var questions = QuestionsDb.GetQuestions();
            var body = JsonConvert.SerializeObject(questions);

            return CreateAPIGatewayProxyResponse(body);
        }

        private void Log(ILambdaContext context, string message)
        {
            context.Logger.LogLine(message);
        }

        /// <summary>
        /// Get question from API Gateway
        /// </summary>
        /// <param name="request">with question Id</param>
        /// <returns>Question</returns>
        public APIGatewayProxyResponse GetQuestion(APIGatewayProxyRequest request, ILambdaContext context)
        {
            Log(context, "Get question request\n");

            request.QueryStringParameters.TryGetValue("Id", out string questionId);

            if (string.IsNullOrEmpty(questionId))
            {
                var badQuestionIdResponse = new APIGatewayProxyResponse
                {
                    StatusCode = (int)HttpStatusCode.InternalServerError,
                    Body = "Unknown question Id.",
                    Headers = new Dictionary<string, string> {
                        {
                            "Content-Type", "application/json"
                        }
                    }
                };

                return badQuestionIdResponse;
            }

            var questionIdValue = int.Parse(questionId);

            var question = QuestionsDb.GetQuestions().OfType<Question>().SingleOrDefault(q => q.Id == questionIdValue);

            if (question == null)
            {
                const string questionNotFoundText = "Question not found.";

                return CreateAPIGatewayProxyResponse(ToJson(questionNotFoundText), HttpStatusCode.NotFound);
            } 

            var body = ToJson(question);

            return CreateAPIGatewayProxyResponse(body);
        }

        /// <summary>
        /// A Lambda function to respond to HTTP Get methods from API Gateway
        /// </summary>
        /// <param name="request"></param>
        /// <returns>The list of blogs</returns>
        public APIGatewayProxyResponse Get(APIGatewayProxyRequest request, ILambdaContext context)
        {
            Log(context, "Get request\n");
            const string helloAwsServerless = "Hello AWS Serverless";

            return CreateAPIGatewayProxyResponse(helloAwsServerless);
        }

        private APIGatewayProxyResponse CreateAPIGatewayProxyResponse(string bodyInJson, HttpStatusCode statusCode = HttpStatusCode.OK)
        {
            return new APIGatewayProxyResponse
            {
                StatusCode = (int)statusCode,
                Body = bodyInJson,
                Headers = new Dictionary<string, string> {
                    {
                        "Content-Type", "application/json"
                    },
                    {
                        "Access-Control-Allow-Headers", "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token"
                    },
                    {
                        "Access-Control-Allow-Methods", "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT"
                    },
                    {
                        "Access-Control-Allow-Origin", "*"
                    }
                }
            };
        }

        private string ToJson(object value)
        {
            return JsonConvert.SerializeObject(value);
        }
    }
}
