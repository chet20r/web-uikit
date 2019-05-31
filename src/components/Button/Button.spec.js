import { shallowMount, mount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  beforeAll(() => {});

  it('is a Vue instance', () => {
    wrapper = shallowMount(Button);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should render button element by default', () => {
    wrapper = shallowMount(Button, {
      slots: {
        default: 'Button Text'
      }
    });
    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render anchor element when tag props is set to `a`', () => {
    wrapper = shallowMount(Button, {
      propsData: {
        tag: 'a'
      }
    });
    expect(wrapper.contains('a')).toBe(true);
  });

  it('should render the button text in default slot', () => {
    wrapper = shallowMount(Button, {
      slots: {
        default: 'Default Button'
      }
    });
    expect(wrapper.text()).toBe('Default Button');
  });

  it('should have default `btn` class', () => {
    wrapper = shallowMount(Button);
    expect(wrapper.classes()).toContain('btn');
  });

  it('should have `primary` class when passed as theme prop', () => {
    wrapper = shallowMount(Button, {
      propsData: {
        theme: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('primary');
  });

  it('should have classes added for boolean props', () => {
    wrapper = shallowMount(Button, {
      propsData: {
        rounded: true,
        inverted: true,
        fullwidth: true
      }
    });
    expect(wrapper.classes()).toContain('rounded', 'inverted', 'fullwidth');
  });

  it('should have class md as default size', () => {
    wrapper = shallowMount(Button, {});
    expect(wrapper.classes()).toContain('md');
  });

  it('should have override style classes passed in style prop', () => {
    wrapper = shallowMount(Button, {
      propsData: {
        styles: ['a', 'b']
      }
    });
    expect(wrapper.classes()).toContain('a', 'b');
  });

  it('should have class `lg` when setting size prop', () => {
    wrapper = shallowMount(Button, {
      propsData: {
        size: 'lg'
      }
    });
    expect(wrapper.classes()).toContain('lg');
  });

  it('should have non prop attributes passed through', () => {
    wrapper = shallowMount(Button, {
      attrs: {
        custom: 'attr'
      }
    });
    expect(wrapper.attributes('custom')).toBe('attr');
  });
});
