using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.TestUtilities;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using Xunit;

namespace SurveyServerless.Tests
{
    public class FunctionTest
    {
        const int ZERO = 0;
        const int ONE = 1;

        public FunctionTest()
        {
        }

        [Fact]
        public void Get_WhenInvoked_ShouldReturnSuccess()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();
            context = new TestLambdaContext();
            response = functions.Get(request, context);

            Assert.Equal((int)HttpStatusCode.OK, response.StatusCode);
            Assert.Equal("Hello AWS Serverless", response.Body);
        }

        [Fact]
        public void Get_WhenInvoked_ShouldReturnCorrectHeaders()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();
            context = new TestLambdaContext();
            response = functions.Get(request, context);

            var headers = response.Headers;
            var contentTypeHeader = headers["Content-Type"];
            Assert.Equal("application/json", contentTypeHeader);

            var allowHeaders = headers["Access-Control-Allow-Headers"];
            Assert.Equal("Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token", allowHeaders);

            var allowMethods = headers["Access-Control-Allow-Methods"];
            Assert.Equal("DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT", allowMethods);

            var allowOrigin = headers["Access-Control-Allow-Origin"];
            Assert.Equal("*", allowOrigin);
        }

        [Fact]
        public void GetQuestions_WhenInvoked_ShouldReturnAllAvailableQuestions()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();
            context = new TestLambdaContext();
            response = functions.GetQuestions(request, context);

            var questions = JsonConvert.DeserializeObject<List<Question>>(response.Body);
            var expectedQuestions = QuestionsDb.GetQuestions();

            Assert.Equal(expectedQuestions.Count, questions.Count);
            Assert.True(expectedQuestions.Count > ONE);

            Assert.Equal(expectedQuestions[ZERO].Title, questions[ZERO].Title);
            Assert.Equal(expectedQuestions[ZERO].Options.Count, questions[ZERO].Options.Count);
            Assert.Equal(expectedQuestions[ZERO].Options[ZERO].Title, questions[ZERO].Options[ZERO].Title);

            Assert.Equal(expectedQuestions[ONE].Title, questions[ONE].Title);
            Assert.Equal(expectedQuestions[ONE].Options.Count, questions[ONE].Options.Count);
            Assert.Equal(expectedQuestions[ONE].Options[ONE].Title, questions[ONE].Options[ONE].Title);
        }

        [Fact]
        public void GetQuestion_WhenInvoked_ShouldReturnQuestionMatchingId()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();

            const int questionId = 1;

            request.QueryStringParameters = new Dictionary<string, string>
            {
                { "Id", questionId.ToString() }
            };

            context = new TestLambdaContext();
            response = functions.GetQuestion(request, context);

            var question = JsonConvert.DeserializeObject<Question>(response.Body);
            var expectedQuestion = QuestionsDb.GetQuestion(questionId);

            Assert.Equal(expectedQuestion.Id, question.Id);
            Assert.Equal(expectedQuestion.Title, question.Title);
            Assert.NotEmpty(question.Options);
            Assert.Equal(expectedQuestion.Options.Count, question.Options.Count);
            Assert.Equal(expectedQuestion.Options[ZERO].Title, question.Options[ZERO].Title);
        }

        [Fact]
        public void GetQuestion_WhenInvokedWithEmptyId_ShouldReturnInternalServerError()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();

            request.QueryStringParameters = new Dictionary<string, string>
            {    
            };

            context = new TestLambdaContext();
            response = functions.GetQuestion(request, context);
            Assert.Equal((int)HttpStatusCode.InternalServerError, response.StatusCode);
        }

        [Fact]
        public void GetQuestion_WhenInvokedWithUnknownQuestionId_ShouldReturnNotFoundStatus()
        {
            TestLambdaContext context;
            APIGatewayProxyRequest request;
            APIGatewayProxyResponse response;

            Functions functions = new Functions();

            request = new APIGatewayProxyRequest();

            const int questionId = 99999;

            request.QueryStringParameters = new Dictionary<string, string>
            {
                { "Id", questionId.ToString() }
            };

            context = new TestLambdaContext();
            response = functions.GetQuestion(request, context);

            Assert.Equal((int)HttpStatusCode.NotFound, response.StatusCode);
        }
    }
}
