import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {create} from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

import {TabBar} from '../TabBar';

describe('TabBar component', () => {
  it('should render without issues', () => {
    const component = shallow(<TabBar />, {context: ''});

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with props', () => {
    const component = shallow(
      <TabBar 
        title={'text'}
        showBackbutton
        backButtonColor={'black'}
        showText={'text'}
      />,
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
