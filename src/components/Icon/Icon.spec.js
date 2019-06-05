import { shallowMount } from '@vue/test-utils';
import Icon from './Icon';
import { iconNames } from './Icon';

describe('Icon', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Icon, { propsData: { name: 'bag' } });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should have default `icon` class on the span by default', () => {
    expect(wrapper.find('span').classes()).toEqual(expect.arrayContaining(['icon']));
  });

  it('should have icon specific class on the span when name props is passed', () => {
    iconNames.forEach(e => {
      wrapper.setProps({ name: e });
      expect(wrapper.find('span').classes()).toEqual(expect.arrayContaining(['icon', e]));
    });
  });

  it('should have default `md` class on the span', () => {
    expect(wrapper.find('span').classes()).toEqual(expect.arrayContaining(['icon', 'md']));
  });

  it('should have `lg` class on the span when size prop is passed', () => {
    wrapper.setProps({ name: 'cart', size: 'lg' });
    expect(wrapper.find('span').classes()).toEqual(expect.arrayContaining(['icon', 'lg']));
  });
});
