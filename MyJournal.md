This journal is written so that the newest entries are at the top. Anything in { } was written at the same time.



## === Creating Seeding Script {

  Goals: Create 10million pieces of data
    More details: Want to make sure it doesn't lag, get sluggest, try to create and add 10 mil pieces of data as fast as possible

  Things to keep in mind: when arrays contain lots of elements they get more and more sluggish due to having A LOT of data at once in the stack. Consider chunking the array to avoid this.

  Current Ideas:
    - Will start cutting up 10mil into 1000 elements per array and doing running them 10,000 times and see how that goes

  > REMEMBER:
    - Make sure to label the variables that will likely change a lot.
    - And run functions that clear the database before running the seeding script to not overwhelm databse with excessive duplicate info.
}