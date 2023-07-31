// screens/SearchScreen.tsx
import React, { useCallback, useMemo, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDebounce } from 'usehooks-ts';
import TaskList from '../components/taskList';
import { useTasksContext } from '../context/taksContext';
import styles from '../styles/search.Style';
import { globalStyles } from '../styles/themes';
import { Task } from '../types/taks';

const SearchScreen = () => {
  const { state } = useTasksContext();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const taskFiltered = useMemo(() => {
    if (!debouncedValue) {
      return [];
    }
    const searchTerm = debouncedValue.toUpperCase();
    return (
      state.tasks?.filter((x) =>
        x.title.toUpperCase().includes(searchTerm)
      ) ?? []
    );
  }, [debouncedValue, state.tasks]);

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>Buscar</Text>
        <Text style={globalStyles.text}>Busca por nombre</Text>
        <View style={styles.searchSection}>
          <Image
            style={styles.searchIcon}
            source={require('../../img/search.png')}
            width={20}
            alt="icon-search"
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Nombre"
            onChangeText={handleChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={globalStyles.subtitle}>{debouncedValue}</Text>

        <TaskList tasks={taskFiltered} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
