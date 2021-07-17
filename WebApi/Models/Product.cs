using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema; 
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Product
    {
        [Key]
       
        public int Product_Id { get; set; }
        [Column (TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public Double  Price { get; set; }
        [Column(TypeName = "nvarchar(1)")]
        public int Active { get; set; }
    }
}
