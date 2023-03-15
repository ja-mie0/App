import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#EBF1FF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  header: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '20%',
    width: '100%',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#d95448',
    shadowColor: '#000',
  },
  headerPlain: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '45%',
    width: '100%',
  },
  svg: {
    height: '100%',
    width: '100%',
    color: '#f2b3b3',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    boxSizing: 'border-box',
    height: '25%',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  button: {
    height: '35%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  active: {
    backgroundColor: '#d95448',
  },
  inactive: {
    backgroundColor: '#f2b3b3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});