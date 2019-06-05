import { shallowMount } from '@vue/test-utils';
import Button from './Button';

describe('Button', () => {
  let wrapper;
  const defaultSlotText = 'Default Button';
  const baseClass = 'btn';
  beforeEach(() => {
    wrapper = shallowMount(Button, {
      slots: { default: defaultSlotText }
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('should render button element by default', () => {
    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should render anchor element when tag props is set to `a`', () => {
    wrapper.setProps({ tag: 'a' });
    expect(wrapper.contains('a')).toBe(true);
  });

  it('should not have `btn` class when anchor element is rendered', () => {
    wrapper.setProps({ tag: 'a' });
    expect(wrapper.classes()).not.toContain(baseClass);
  });

  it('should render input element when tag props is set to `input`', () => {
    wrapper.setProps({ tag: 'input' });
    expect(wrapper.contains('input')).toBe(true);
  });

  it('should have value property on input element when tag props is set to `input`', () => {
    wrapper.setProps({ tag: 'input' });
    expect(wrapper.attributes('value')).toBe(defaultSlotText);
  });

  it('should render the button text in default slot', () => {
    expect(wrapper.text()).toBe(defaultSlotText);
  });

  it('should have default `btn` class', () => {
    expect(wrapper.classes()).toContain(baseClass);
  });

  it('should have `primary` class when passed as theme prop', () => {
    wrapper.setProps({ theme: 'primary' });
    expect(wrapper.classes()).toContain('primary');
  });

  it('should have classes added for boolean props', () => {
    wrapper.setProps({
      rounded: true,
      outline: true,
      fullwidth: true
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['rounded', 'outline', 'fullwidth']));
  });

  it('should have class md as default size', () => {
    expect(wrapper.classes()).toContain('md');
  });

  it('should have override style classes passed in style prop', () => {
    wrapper.setProps({ styles: ['a', 'b'] });
    expect(wrapper.classes()).toContain('a', 'b');
  });

  it('should have class `lg` when setting size prop', () => {
    wrapper.setProps({ size: 'lg' });
    expect(wrapper.classes()).toContain('lg');
  });

  it('should have non prop attributes passed through', () => {
    wrapper = shallowMount(Button, {
      attrs: {
        custom: 'attr'
      },
      slots: {
        default: 'Button'
      }
    });
    expect(wrapper.attributes('custom')).toBe('attr');
  });
});
