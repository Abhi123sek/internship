
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartContext} from './Cartcontext';


const width= Dimensions.get('window').width;
const products = [
    {
        id: 1,
        name: 'Strawberry',
        description: '.',
        price: 200,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-1920,q=80'
    },
    {
        id: 2,
        name: 'Blackberry',
        description: '.',
        price: 150,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40083980_6-fresho-blueberry.jpg?tr=w-1920,q=80'
    },
    {
        id: 3,
        name: 'Kesar Mango',
        description: '.',
        price: 150,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/30000974_12-fresho-kesar-mango.jpg?tr=w-1920,q=80'
    },
    {
        id: 4,
        name: 'Orange',
        description: '.',
        price: 100,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80'
    },
    {
        id: 5,
        name: 'Orange',
        description: '.',
        price: 100,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80'
    },
    {
        id: 6,
        name: 'Orange',
        description: '.',
        price: 100,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80'
    },
    {
        id: 7,
        name: 'Orange',
        description: '.',
        price: 100,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80'
    },
    {
        id: 8,
        name: 'Orange',
        description: '.',
        price: 100,
        imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20003955_2-fresho-baby-orange.jpg?tr=w-1920,q=80'
    },
];

const ProductPage = ({ navigation }) => {
    const [isSingleColumn, setIsSingleColumn] = useState(false);
    const { addToCart } = useContext(CartContext);

    const handleToggle = () => {
        setIsSingleColumn(!isSingleColumn);
    };
    const handleBuyNow = (product) => {
        navigation.navigate('BuyNowPage', { product });
      };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.toggleButton} onPress={handleToggle}>
                <Text style={styles.buttonText}>
                   <Icon
                   name= {isSingleColumn ? 'th-large' : 'list'}
                   size={20}
                   color="#fff"
                   />
                </Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={[styles.productGrid, isSingleColumn && styles.singleColumn]}>
                    {products.map(product => (
                        <Card containerStyle={styles.card} key={product.id}>
                            <Image source={{ uri: product.imageUrl }} style={styles.image} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productDescription}>{product.description}</Text>
                            <Text style={styles.productPrice}>{"\u20B9"}{product.price}</Text>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => {
                                    addToCart(product);
                                    
                                }}
                            >
                                <Text style={styles.buttonText}>Add to Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buyButton}  onPress={() => handleBuyNow(product)}
              >
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
                        </Card>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#eeaeca',
    },
    
    buttonText: {
        color: '#fff',
        fontSize: 13,
    },
    scrollView: {
        alignItems: 'center',
        
    },
    productGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    singleColumn: {
        flexDirection: 'column',
    },
    card: {
        width: width * 0.4,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        top:35,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
    },
    productDescription: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        color: '#007BFF',
    },
    addButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buyButton: {
        backgroundColor: '#FF6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    toggleButton: {
        height:50,
        width:50,
        top: 0,
        right:0.1,
        
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProductPage;