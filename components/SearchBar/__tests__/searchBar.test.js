import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {create} from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

import {SearchBar} from '../index';

describe('SearchBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />, {context: ''});

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with tabbar', () => {
    const component = shallow(
      <SearchBar 
        withTabBar={false}
      />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render without cancel Button', () => {
    const component = shallow(
      <SearchBar 
        withTabBar={false}
        onCancel={false}
      />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });


  it('should have onPress event', () => {
    const onPress = jest.fn();
    const component = shallow(<SearchBar onPress={()=>onPress}/>);
    expect(toJson(component)).toMatchSnapshot();
  });

});
