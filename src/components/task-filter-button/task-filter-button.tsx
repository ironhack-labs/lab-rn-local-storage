import React, {useState} from 'react';
import {
  Button,
  Icon,
  OverflowMenu,
  MenuItem,
  Layout,
} from '@ui-kitten/components';

import {useAppCtx} from '../../context';
import {ALL_TASK_CATEGORIES} from '../../__mocks__';
import {PropType} from '../../types';

export const TaskFilterButton = () => {
  const {filters, toggleFilter} = useAppCtx();

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(true);
  };

  const onFilterPress: PropType<MenuItem, 'onPress'> = props => {
    const category = ALL_TASK_CATEGORIES[props.index.row];
    toggleFilter(category);
  };

  return (
    <Layout level="1">
      {/* Botón con el icono de filtrado */}
      <OverflowMenu
        // eslint-disable-next-line react/no-unstable-nested-components
        anchor={() => (
          <Button
            status="control"
            onPress={toggleMenu}
            accessoryLeft={props => <Icon {...props} name="funnel-outline" />}
          />
        )}
        visible={menuVisible}
        onBackdropPress={() => setMenuVisible(false)}>
        {ALL_TASK_CATEGORIES.map(category => (
          <MenuItem
            key={category}
            onPress={onFilterPress}
            title={category}
            // eslint-disable-next-line react/no-unstable-nested-components
            accessoryLeft={props => (
              <Icon
                {...props}
                name={
                  filters.includes(category)
                    ? 'checkmark-square-2-outline'
                    : 'square-outline'
                }
              />
            )}
          />
        ))}
      </OverflowMenu>
    </Layout>
  );
};
