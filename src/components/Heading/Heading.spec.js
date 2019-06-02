import { shallowMount } from '@vue/test-utils';
import Heading from './Heading';

describe('Heading', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Heading);
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should render default h1 Heading Element', () => {
    expect(wrapper.contains('h1')).toBe(true);
  });

  it('should render header elements as per level prop', () => {
    const levels = ['h2', 'h3', 'h4', 'h5', 'h6'];
    levels.forEach(e => {
      wrapper.setProps({ level: e });
      expect(wrapper.contains(e)).toBe(true);
    });
  });

  it('should not render when level prop is not valid', () => {
    wrapper.setProps({ level: 'div' });
    expect(wrapper.isEmpty()).toBe(true);
  });

  it('should have a class of heading', () => {
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['heading']));
  });
});
