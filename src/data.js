const data = [
    {
      id : 1 ,
      name : 'shopping list' ,
      description : 'need for home',
      items : [
        {
          id : 1,
          title : 'milk',
          status : false
        },
        {
          id : 2,
          title : 'sugar',
          status : false
        },
      ]
    },
    {
        id : 2 ,
        name : 'Meetings' ,
        description : 'monday',
        items : [
          {
            id:1,
            title : 'mr smith',
            status : false
          },
          {
            id : 2,
            title : 'mr brown',
            status : false
          },
        ]
      },
      {
        id : 3 ,
        name : 'projects' ,
        description : 'university',
        items : [
          {
            id:1,
            title : 'advance algo',
            status : false
          },
          {
            id : 2,
            title : 'math',
            status : false
          },
           {
            id : 3,
            title : 'React',
            status : false
          },
        ]
      },
      {
        id : 4 ,
        name : 'projects' ,
        description : 'university',
        items : [
          {
            id:1,
            title : 'advance algo',
            status : false
          },
          {
            id : 2,
            title : 'math',
            status : false
          },
           {
            id : 3,
            title : 'React',
            status : false
          },
        ]
      },
      {
        id : 5 ,
        name : 'projects' ,
        description : 'university',
        items : [
          {
            id:1,
            title : 'advance algo',
            status : false
          },
          {
            id : 2,
            title : 'math',
            status : false
          },
           {
            id : 3,
            title : 'React',
            status : false
          },
        ]
      },
      {
        id : 6 ,
        name : 'projects' ,
        description : 'university',
        items : [
          {
            id:1,
            title : 'advance algo',
            status : false
          },
          {
            id : 2,
            title : 'math',
            status : false
          },
           {
            id : 3,
            title : 'React',
            status : false
          },
        ]
      },
      {
        id : 7 ,
        name : 'projects' ,
        description : 'university',
        items : [
          {
            id:1,
            title : 'advance algo',
            status : false
          },
          {
            id : 2,
            title : 'math',
            status : false
          },
           {
            id : 3,
            title : 'React',
            status : false
          },
        ]
      }
  ]

  export const RandomId = () =>{
      return parseInt(Math.random() * 10000)
  };

  export default data ;