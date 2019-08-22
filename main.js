const database = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function printReceipt (barcodeArray) {
    // barcodeArray=['0001', '0003', '0005', '0003'];
    // result=countItems(barcodeArray);
    // getedItems=getItems(result);
    // calculatedTotal=calculateTotal(getedItems);
    // return calculatedTotal;

//    barcodeArray=['0001', '0003', '0005', '0003'];
//     result=countItems(barcodeArray);
//     getedItems=getItems(result);
//     calculateTotal(getedItems);
//     return calculatedTotal;

    barcodeArray=['0001', '0003', '0005', '0003'];
    result=countItems(barcodeArray);
    getedItems=getItems(result);
    calculatedTotal=calculateTotal(getedItems)
    str=print(getedItems,calculatedTotal);
}


//['0001', '0003', '0005', '0003']

function countItems(barcodeArray){
    let result = [];
    let map = new Map();
    for(let i = 0; i < barcodeArray.length; i++){
        if (map.get(barcodeArray[i])==null){
            map.set(barcodeArray[i],1);
        }else{
            map.set(barcodeArray[i],map.get(barcodeArray[i])+1);
        }
    }

    map.forEach(function(value,key){
        result.push({id:key,count:value})
      });
    return result;
}



function getItems(result){
    let getedItems=[];
    for(let i = 0; i<result.length;i++){
        for (let j=0; j<database.length;j++){
            if(result[i].id==database[j].id){
                getedItems.push({id:database[j].name,count:result[i].count,price:database[j].price})
            }
        }
    }
    return getedItems;
}

function calculateTotal(getedItems){
    let calculatedTotal=0;
        for(let i=0; i<getedItems.length;i++){
            calculatedTotal=calculatedTotal+(getedItems[i].count *getedItems[i].price)
        }
    return calculatedTotal;
}


function print(getedItems,calculatedTotal){
     let str=[];
     let subStr;

    for(var i=0; i<getedItems.length; i++){
        
            str[i]=getedItems[i].id +"      "+getedItems[i].price +"         "+ getedItems[i].count + "\n"
    }
      
    for(var i=0; i<str.length;i++){
        subStr=str[0] +str[1]+str[2]
    }

    receipt = "Receipts\n" +
        "-----------------------------------\n" +
    

        subStr+
        "-----------------------------------\n" +
        "Price:"+calculatedTotal;
    return receipt;

    // str = getedItems[i].id+ " " +getedItems[i].price+" "+ getedItems[i].count
    // return str;
}

