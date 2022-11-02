import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  dataContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 16,
    color: 'blue'
  },
  image: {
    width: '100%',
    height: '80%',
    marginTop: "50%",
    marginLeft: "5%",
    position: 'absolute',
  }
});

export default styles;