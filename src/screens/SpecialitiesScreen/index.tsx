import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {Iconsvg, Xml} from '../../assets/svgicon';
import {COLORS} from '../../constants/colors';

const specialities = [
  {id: '1', name: 'Cardiology', icon: Xml.Cardiology},
  {id: '2', name: 'Dermatology', icon: Xml.Dermatology},
  {id: '3', name: 'General Medicine', icon: Xml.GeneralMedicine},
  {id: '4', name: 'Gynecology', icon: Xml.Gynecology},
  {id: '5', name: 'Odontology', icon: Xml.Odontology},
  {id: '6', name: 'Oncology', icon: Xml.Oncology},
  {id: '7', name: 'Ophtamology', icon: Xml.Ophtamology},
  {id: '8', name: 'Orthopedics', icon: Xml.Orthopedics},
];

const SpecialitiesScreen = () => {
  const renderSpeciality = ({item}: {item: any}) => (
    <TouchableOpacity style={styles.specialityCard}>
      <Iconsvg xml={item.icon} width="140" height="140" /> {/* Increased size */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity>
            <Iconsvg xml={Xml.Header.back} width="24" height="24" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Specialties</Text>
        <Text style={styles.subtitle}>Find Your Doctor</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor={COLORS.blue}
          />
          <Iconsvg
            style={styles.searchIcon}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xml={Xml.Search}
          />
        </View>
      </View>
      <View style={styles.filterRow}>
        <View style={styles.filterLeft}>
          <Text style={styles.filterText}>Sort By</Text>
          <Iconsvg
            style={styles.iconSpacing}
            width="38" // Increased size
            height="38"
            fill="none"
            xml={Xml.FilterIcon}
          />
          <Iconsvg
            style={styles.iconSpacing}
            width="38" // Increased size
            height="38"
            fill="none"
            xml={Xml.FilterImage}
          />
        </View>
        <Text style={styles.doctorsText}>Doctors</Text>
      </View>
      <View style={styles.separator} />
      <FlatList
        data={specialities}
        renderItem={renderSpeciality}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.specialitiesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    top: 10,
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
  },
  header: {
    backgroundColor: COLORS.blue,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerTopRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'LeagueSpartan-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    bottom: 40,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 5,
    textAlign: 'center',
    width: '100%',
    flexWrap: 'wrap',
    fontFamily: 'LeagueSpartan-Bold',
    bottom: 10,
  },
  searchBar: {
    flex: 1, // Allow the TextInput to take up available space
    fontSize: 14,
    color: COLORS.blue,
    fontFamily: 'LeagueSpartan-ExtraLight',
    paddingLeft: 30,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  filterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    color: COLORS.blue,
    fontWeight: 'bold',
    marginRight: 10, // Add spacing after "Sort By"
  },
  iconSpacing: {
    marginLeft: 10, // Add spacing between icons
  },
  doctorsText: {
    fontSize: 14,
    color: COLORS.blue,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: -5,
    marginHorizontal: 20,
  },
  specialitiesList: {
    marginTop: 20,
  },
  columnWrapper: {
    justifyContent: 'space-evenly', // Further reduced spacing between icons
    marginBottom: 15, // Reduced bottom margin
  },
  specialityCard: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '38%', // Slightly increased width to reduce gaps
  },
  specialityText: {
    marginTop: 10,
    fontSize: 14,
    color: '#252525',
    textAlign: 'center',
  },
});

export default SpecialitiesScreen;
