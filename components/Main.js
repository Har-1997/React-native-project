import { gStyle } from '.././style/style';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Form from "./Form";

export default function Main({ navigation }) {
  // const loadScene = ()=> {
  //   // Stex vercnum enq navigation props-ov qani navigate-um kanchel enq es 2 komponentnere iranq arden aranc poxancelu unen navigate-e. De hima tenca ashxatum,
  //   // heto navigate-in el talis enq navigation ejum nshvac tvyal root-i name-e
  //   navigation.navigate('FullInfo');

  // }
  // const loadScene = ()=> {
  //   // es funkciayov el het enq etum naxord ej
  //   navigation.goBack();
  // }

  const [news, setNews] = useState([
    {key: 1, name: 'Google', anons: 'Google!!!', full: 'Google is cool!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G0UWlV2MDfI1VuRUmGBh_pM7FdQ-tFnMDQ&s'},
    {key: 2, name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlpdEI6Xlo9wxFEJHom_dDyxkyF_32Y1T4A&s'},
    {key: 3, name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FyAeQVSwIqCUVeZGv6r5s9R5xmVrIzSQXg&s'},
  ])

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article)=> {
    article.key = news.length;
    setNews([article, ...news]);
    modalToggle(false);
  }

  const modalToggle = (bool)=> {
    setModalWindow(bool);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={false}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={()=> modalToggle(false)}
          />
          <Text style={styles.title}>Form add</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={()=> modalToggle(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Home Page</Text>
      <FlatList
        data={news}
        renderItem={({ item })=> (
          // stex FullInfo-in talis enq naev parametr u componenti mijic route-ov vercnum enq es item parametre
          <TouchableOpacity
            onPress={()=> navigation.navigate('FullInfo', item)}
            style={styles.item}
          >
            <Image
              style={styles.image}
              source={{ uri: item.img }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title='Open About' onPress={loadScene} /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 200,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottm: 15,
  },
  iconClose: {
    textAlign: 'center',
  }
});