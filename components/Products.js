import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <View>
      <View>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
            <View style={{display:"flex", alignSelf:"center", alignItems:"center", paddingVertical:20, backgroundColor:"white", marginTop:15, width:"100%"}}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 200, height: 200, resizeMode: "contain", }}
              />
              <Text>{item.title}</Text>
              <Text style={{fontWeight:"bold", fontSize:16, paddingVertical:10}}>${item.price}</Text>
              <View style={{paddingVertical:10}}>
              <TouchableOpacity style={{backgroundColor:"grey", paddingVertical:8, paddingHorizontal:10, color:"white", borderRadius:5}}>
              <Text>Add to cart</Text>
              </TouchableOpacity>
              </View>
            </View>
          
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Products;
