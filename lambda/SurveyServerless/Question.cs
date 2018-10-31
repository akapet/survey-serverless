using System.Collections.Generic;

namespace SurveyServerless
{
    public class Question
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public IList<Option> Options { get; set;}
    }
}
