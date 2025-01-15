// //syntax 
// // switch (key) {
// //     case value:
        
// //         break;

// //     default:
// //         break;
// // }

// const month = 3;

// switch (month) {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("fb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("april");
//         break;
//         //select shift + alt + down arrow  for making the duplicate 

//     default:
//         console.log("not found");
//         break;
// }



// let s = "cAmELCase thisIng thising2"

// let this =[];
// for(let i = 0; i < s.length;i++) {
//     this[i] = s[i];
// }


//prototyping 

 

function capitalCase() {
    let final = [];
    final.push(this[0].toLocaleUpperCase());
    for(let i = 1; i < this.length; i++) {
        
        if(this[i] === this[i].toLocaleLowerCase() && this[i-1] != " " )
            {
                final.push(this[i].toLocaleLowerCase());
            }
        else if(this[i] === this[i].toLocaleUpperCase() && this[i-1] != " " )
            {
                final.push(this[i].toLocaleLowerCase());
            }
        else if(this[i] === this[i].toLocaleUpperCase() && this[i-1] == " ")
        {
            final.push(" ");
            final.push(this[i].toLocaleUpperCase());
        }
        else if( this[i] === " ")
        {
            continue;
        }    
    }
    
    console.log(final);
}

String.prototype.toCapitalCase = capitalCase;

"abc".toCapitalCase();






