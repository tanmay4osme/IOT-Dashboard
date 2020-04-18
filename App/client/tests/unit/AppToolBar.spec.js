import AppToolBar from '../../src/components/toolbar/AppToolBar';
import {mount } from '@vue/test-utils';

describe('AppToolBar', () => {
  test('If user is not logged in, hide login button', () => {
    const wrapper = mount(AppToolBar);
    expect(wrapper.find('button').isVisible()).toBe(false);
  })

  test('If user is logged in, hide controls', () => {
    const wrapper = mount(AppToolBar);
    expect(wrapper.find('button').isVisible()).toBe(true);
  })
})
