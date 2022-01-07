using System.ComponentModel.DataAnnotations;

namespace BookService.Models
{
    public class Book
    {
        public int BookId { get; set; }     //PK
        public int AuthorId { get; set; }   //FK
        [Required]
        public string Title { get; set; }
        public int Year { get; set; }
        public decimal Price { get; set; }
        public string Genre { get; set; }

        
        // Navigation property
        public Author Author { get; set; }
    }
}