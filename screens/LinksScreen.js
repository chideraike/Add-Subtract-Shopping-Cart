import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

const productItems = [
  { id:0,
    name:"iPhone 6S",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-6s-1.jpg",
    price:799
  },
  { id:1,
    name:"iPhone 5S",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5s-ofic.jpg",
    price:349
  },
  { id:2,
    name:"Macbook",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://zdnet3.cbsistatic.com/hub/i/r/2019/08/05/b2e40423-7c4c-48b5-9c7a-ea7ee92f96fe/thumbnail/770x433/c0942922b4c437cffdac1b9d2b0fd7e6/13-inch-mbpro-header.jpg",
    price:1499
  },
  { id:3,
    name:"Macbook Air",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://cnet3.cbsistatic.com/img/KEM_0EsoAP-9kOds2Fbal9Ww540=/1200x675/2017/08/14/ec0fa893-faf2-46c3-8933-6898773804ba/apple-macbook-air-2017-05.jpg",
    price:999
  },
  { id:4,
    name:"Macbook Air 2013",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://cnet3.cbsistatic.com/img/KEM_0EsoAP-9kOds2Fbal9Ww540=/1200x675/2017/08/14/ec0fa893-faf2-46c3-8933-6898773804ba/apple-macbook-air-2017-05.jpg",
    price:599
  },
  { id:5,
    name:"Macbook Air 2012",
    description:"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
    imageUrl:"https://cnet3.cbsistatic.com/img/KEM_0EsoAP-9kOds2Fbal9Ww540=/1200x675/2017/08/14/ec0fa893-faf2-46c3-8933-6898773804ba/apple-macbook-air-2017-05.jpg",
    price:499
  }
];

export default function LinksScreen() {
  const [products, _setProducts] = useState(productItems);
  const [cart, mutateCart] = useState([])

  return (
    <ScrollView>
      <View>
        {products.map((el, key)=>(
          <View key={key} style={{flexDirection: 'row', padding: 15}}>
            <View style={{alignSelf: 'center'}}>
              <Image style={{height: 60, width: 60, borderRadius: 20}} source={{uri: el.imageUrl}} />
            </View>
            <View style={{flex: 1, marginLeft: 15, justifyContent: 'center', borderBottomWidth: 0.25, borderBottomColor: 'grey', padding: 5}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{el.name}</Text>
                <Text>${el.price}</Text>
              </View>
              <View>
                {<Button title={cart.map((p)=> p.key).includes(el.id)?'Added to Cart': 'Add to cart'} 
                onPress={()=>{
                   mutateCart([...cart, {
                     name: el.name,
                     price: el.price,
                     key: el.id
                   }])  
                }} />}
                <Button title='Remove from Cart'
                  onPress = {()=>{
                    let updatedCart = cart.filter(p=>{
                      return p.key !== el.id
                    })
                    mutateCart(updatedCart)
                  }}
                />
              </View>
            </View>
          </View>
        ))}
        <View>
          <Text style={{textAlign: 'center'}}>
            Total items in cart: {cart.length}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  }
});
