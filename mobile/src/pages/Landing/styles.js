import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2d2d2d',
    paddingLeft: 20,
    marginBottom: 20
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    paddingLeft: 20,
    color: '#5f5c5b',
    marginBottom: 10
  },
  panel: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-around'
  },
  box: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 16
  },
  boxon: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: '#0e41d8',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 16
  },
  image: {
    width: 38,
    height: 38
  },
  boxtitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d2d2d'
  },
  boxtitleOff: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttontoggleOn: {
    borderRadius: 12,
    padding: 7,
    backgroundColor: '#0e41d8'
  },
  buttontoggleOff: {
    borderRadius: 12,
    padding: 7,
    backgroundColor: '#2d2d2d'
  },
  buttontext: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default styles;