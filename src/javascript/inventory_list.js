let items = []

  const add = (name) => {
    items.unshift(name);
  }

  const remove = (name) => {
    let index = items.indexOf(name);
    if (index > -1) {
        items.splice(index, 1);
    }
  }

  const getList = () => {
    items.map(item => {
        console.log(item)
    })
   }


   
   add('Shirt');
   add('Trouser');
   add('Shirt');
   getList();

   remove('Trouser');
   console.log("after remove value")
   getList();

   add("track");
   console.log("add new value")
   getList();

   var arr=[1,2,3,4,5]
   console.log(arr.splice(1,1));
   console.log(arr);