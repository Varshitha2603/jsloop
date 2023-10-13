//---------------------------------------1. for loop-------------------------------------------------


// var arr = [13,23,12,45,22,48,66,100];
// for (i=0; i<arr.length; i++)
// {
//     if(arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }


//--------------------------------------1. while loop-------------------------------------------------


// let i=0;
// while(i<arr.length)
// {
//     i++;
//     if(arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }


//------------------------------------------1. do while loop---------------------------------------------


// let i=0;
// do{
//     i++;
//     if(arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }
// while(i<arr.length);


//--------------------------------------------2.for loop--------------------------------------------


// var arr = [23,56,4,78,5,56,112,45,56,210,56]
// for(i=0;i<arr.length;i++)
// {
//     if ((arr[i] * 56)
//     {
//         console.log(arr[i]);
//     }
// }


//-------------------------------------------2.while loop---------------------------------------------


// let i=-1;
// while(i<arr.length)
// {
//     i++;
//     if(!(arr[i]%56==0))
//     {
//         console.log(arr[i]);
//     }
// }


//-------------------------------------------2. do while loop--------------------------------------------


// let i=-1;
// do
// {
//     i++;
//     if(!(arr[i]%56==0))
//     {
//         console.log(arr[i]);
//     }
// }
// while(i<arr.length);


//-----------------------------------------3. for loop--------------------------------------------------------


// function powerValue(base, expotation)
// {
//     powe = 1;
//     for( i=0; i<expotation; i++ )
//     {
//         powe *= base;
//     }
//     return powe;
// }
// console.log(powerValue(2,4));


//------------------------------------------3. while loop------------------------------------------------------
// function powerValue(base, expotation)
// {
//     powe = 1;
//     let i = 0;
//     while(i<expotation)
//     {
//         i++;
//         powe = powe * base;
//     }
//     return powe;
// }
// console.log(powerValue(4,5));


//---------------------------------------------3. do while loop-------------------------------------------------


// function powerValue(base, expotation)
// {
//     powe = 1;
//     let i =0;
//     do
//     {
//        i++;
//        powe = powe * base;
//     }
//     while(i<expotation);
//     return powe;
// }
// console.log(powerValue(3,2));


//----------------------------------------------4. for loop--------------------------------------------------------


// let n = 9;
// let pattern = "";
// for(i=1;i<=n;i++)
// {
//     for(j=1;j<i;j++)
//     {
//         pattern += j;
//     }
//     pattern += "\n";
// }
// console.log(pattern);


//------------------------------------------------4. while loop----------------------------------------------------


// let i=0;
// let j=0;
// let n = 8;
// let pattern = "";
// while(i<n)
// {
//     i++;
//     while(j<i)
//     {
//         j++;
//         pattern += j;
//         console.log(pattern);
//     }
// }


//--------------------------------------------------4. do while loop------------------------------------------------


// let i=0;
// let j=0;
// let n=8;
// let pattern = ""
// do
// {
//     i++;
//     do 
//     {
//         j++;
//         pattern += j;
//     }
//     while(j<i);
//     console.log(pattern);
// }
// while(i<n);


//------------------------------------------------5. for loop-------------------------------------------------


// let a = '563349';
// for(i=0; i<a.length; i++)
// {
//     a = (a.length+1)-1;
// }
// console.log(a);
//               5. while loop
// let i=0;
// while(i<a.length)
// {
//     i++;
//     a = (a.length+1)-1;
// }
// console.log(a);


//------------------------------------------------5. do while loop---------------------------------------------------


// let i = 1;
// do
// {
//     i++;
//     a = (a.length+1)-1;
//     console.log(a);
// }
// while(i<a.length);