using System.Collections.Generic;
using System.Linq;

namespace SurveyServerless
{
    public class QuestionsDb
    {
        static IList<Question> questions;

        static QuestionsDb()
        {
            questions = new List<Question>();

            // Populate list of questions 
            Question question1 = new Question()
            {
                Id = 1,
                Title = "What phone do you use?",
                Options = new List<Option>()
                {
                    new Option()
                    {
                        Title = "iPhone"
                    },
                    new Option()
                    {
                        Title = "Android"
                    },
                    new Option()
                    {
                        Title = "Windows Phone"
                    },
                }
            };

            // Populate list of questions 
            Question question2 = new Question()
            {
                Id = 2,
                Title = "How old are you?",
                Options = new List<Option>()
                {
                    new Option()
                    {
                        Title = "18 - 25 years old."
                    },
                    new Option()
                    {
                        Title = "26 - 35 years old."
                    },
                     new Option()
                    {
                        Title = "36 - 70 years old."
                    },
                    new Option()
                    {
                        Title = "Over 70 years old."
                    }
                }
            };

            questions.Add(question1);
            questions.Add(question2);
        }

        public static IList<Question> GetQuestions() { 
        
            return questions;
        }

        public static Question GetQuestion(int questionId)
        {
            return questions.OfType<Question>().SingleOrDefault(q => q.Id == questionId);
        }
    }
}
