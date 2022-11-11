const personas = [
    {
      nombre: "carlos",
      edad: 30,
    },
    {
      nombre: "Angelo",
      edad: 29,
    },
  ];
  
  let personas2 = []
  
  const laguanges = [
      {
          Javascript: 60,
          nodeJs: 40,
          vue: 10,
      },
      {
          Javascript: 60,
          React: 60,
          Sass: 70,
      }
  ]
  
  const awesomeFunction = (personas, per) => {
    let found = {}
    personas.forEach((person) => {
      if(person.nombre === per.nombre) {
          found = personas2.find(fd => person.name === fd.name)
          if(!found){
              personas2.push({ ...person })
              found = personas2[0]
          }
          if(per.field === "languages") {
              Object.keys(laguanges[per.value]).forEach((key, i) => {
                  if(laguanges[per.value][key]) {
                      if(found.laguanges && !found.laguanges[key]) {
                          found.laguanges[key] = laguanges[per.value][key]
                      } else {
                          found.laguanges = {
                              [key]: laguanges[per.value][key]
                          }
                      }
                  }
              })
          } else {
              found[per.field] = per.data[per.value]
          }
      }
    });
  };
  
  awesomeFunction(personas,{
    nombre: "Angelo",
    field: "languages",
    value: 1
  });
  
  console.log(personas2);