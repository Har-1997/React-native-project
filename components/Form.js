import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        onSubmit={(values, action)=> {
          console.log(values);
          addArticle(values);
          action.resetForm();
        }}
        initialValues={{name: '', anons: '', full: '', img: ''}}
      >
        {
          (props)=> (
            <View>
              <TextInput
                style={styles.input}
                value={props.values.name}
                placeholder='Name'
                onChangeText={props.handleChange('name')}
              />
              <TextInput
                style={styles.input}
                value={props.values.anons}
                placeholder='Anons'
                onChangeText={props.handleChange('anons')}
                multiline
              />
              <TextInput
                style={styles.input}
                value={props.values.full}
                placeholder='Description'
                onChangeText={props.handleChange('full')}
                multiline
              />
              <TextInput
                style={styles.input}
                value={props.values.img}
                placeholder='Add photo'
                onChangeText={props.handleChange('img')}
              />
              <Button
                title='Add'
                onPress={props.handleSubmit}
              />
            </View>
          )
        }
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1.5,
    marginTop: 12,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5
  }
});