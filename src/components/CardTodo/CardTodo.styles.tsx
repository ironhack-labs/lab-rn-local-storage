import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 100,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 1,
    elevation: 2,
  },
  description: {
    fontSize: 20
  },
  taskDetail: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  descripcionSpace: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonBox: {
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  actionButtons: {
    marginTop: 10,
  },
  taskTitleAction: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  comboFilter: {
    padding: 20
  },
  filterTitle: {
    fontSize: 20
  },
  filterButton: {
    backgroundColor: '#7CB518',
    marginTop: 10,
    padding: 20
  },
  toggleFilter: {
    fontSize: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30
  },
  colorFilterBy: {
    color: 'white'
  }
})