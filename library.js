let arrObj = [
    { 
       author: 'Bill Gates', 
    title: 'The Road Ahead',
     libraryID: 1254
    },
    {
        author: 'Steve Jobs',
      title: 'Walter Isaacson', 
      libraryID: 4264
    },
    {
        author: 'Suzanne Collins', 
      title: 'Mockingjay: The Final Book of The Hunger Games', 
      libraryID: 3245
    }
   ];
   
    
  arrObj.sort((a, b) => {
       return a.libraryID - b.libraryID;
   });
   console.log(arrObj);
   