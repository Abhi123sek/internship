import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import icons from Expo
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const image = require('../assets/Pink and Black Modern Initials Logo Design.png');
const HomeScreen = () => {
  const navigation = useNavigation();

  const goToProductDetail = () => {
    // Replace 'ProductDetail' with your actual screen name
    navigation.navigate('ProductDetail');
  };
  const goToUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Logo and Navigation */}
        <Image source={image} resizeMode="cover" style={styles.logo}></Image>
        {/* Search Bar */}
        <TextInput style={styles.searchBar} placeholder="Search products..." />
        {/* User Profile (optional) */}
        <TouchableOpacity style={styles.profileIcon} onPress={goToUserProfile}>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Sliding Pictures Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
          <Image source={{ uri: 'https://www.shopickr.com/wp-content/uploads/2018/12/paytm-mall-grocery-sale.jpg' }} style={styles.carouselImage} />
          <Image source={{ uri: 'https://www.shopickr.com/wp-content/uploads/2018/12/paytm-mall-grocery-sale.jpg' }} style={styles.carouselImage} />
          <Image source={{ uri: 'https://example.com/banner3.jpg' }} style={styles.carouselImage} />
        </ScrollView>
      </View>

      {/* Offers Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Offers</Text>
        <View style={styles.offersContainer}>
          <TouchableOpacity style={styles.offer} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://dealroup.com/wp-content/uploads/2020/05/Grocery-Offers.jpg' }} style={styles.offerImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.offer} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://www.shopickr.com/wp-content/uploads/2018/12/paytm-mall-grocery-sale.jpg' }} style={styles.offerImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.offer} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://example.com/offer3.jpg' }} style={styles.offerImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.ctaButtons}>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Explore Offers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.categoryCard} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>Fruits & Vegetables</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://thecafelife.co.uk/images/directory/categories/eggs-dairy.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>Dairy & Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://www.ouinolanguages.com/assets/French/vocab/10/images/pic13.jpg' }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>Snacks</Text>
          </TouchableOpacity>
          {/* Add more categories */}
        </ScrollView>
      </View>

      {/* Featured Products Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.productCard} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://th.bing.com/th/id/OIP.ploDcPHuMifYSMeASKYWfgHaHV?rs=1&pid=ImgDetMain' }} style={styles.productImage} />
            <Text style={styles.productName}>Chocolate Pastry</Text>
            <Text style={styles.productPrice}>₹ 99.99</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard} onPress={goToProductDetail}>
            <Image source={{ uri: 'https://girirajbakers.com/wp-content/uploads/2021/12/Pineapple-Pastry-Giriraj-Bakers-e1638876393765.jpg' }} style={styles.productImage} />
            <Text style={styles.productName}>Pineapple pastry</Text>
            <Text style={styles.productPrice}>₹ 149.99</Text>
          </TouchableOpacity>
          {/* Add more products */}
        </ScrollView>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text>About Us</Text>
        <Text>Contact</Text>
        <Text>FAQ</Text>
        {/* Add social media icons */}
        <View style={styles.socialIcons}>
          <AntDesign name="twitter" size={24} color="black" />
          <AntDesign name="facebook-square" size={24} color="black" />
          <AntDesign name="instagram" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd5b3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  profileIcon: {
    paddingHorizontal: 10,
  },
  carouselContainer: {
    height: 150,
    marginVertical: 10,
  },
  carouselImage: {
    width: width,
    height: 150,
    resizeMode: 'cover',
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  offersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
   
    
  },
  offer: {
    width: '30%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  offerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  ctaButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  ctaButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryCard: {
    marginRight: 10,
  },
  categoryImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoryName: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  productCard: {
    marginRight: 10,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  productPrice: {
    textAlign: 'center',
    marginTop: 5,
    color: 'green',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
