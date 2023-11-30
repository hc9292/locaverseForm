const { mount } = require('@vue/test-utils');
const Index = require('./index.vue').default;

describe('Index', () => {
  it('submits the form with valid data', async () => {
    const wrapper = mount(Index);

    // Simulate user input
    await wrapper.setData({
      serviceName: 'Test Service',
      businessName: 'Test Business',
      serviceRating: 3,
    });

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Wait for the next tick to allow the form submission to be processed
    await wrapper.vm.$nextTick();

    // Check if the form fields are cleared after submission
    expect(wrapper.vm.serviceName).toBe('');
    expect(wrapper.vm.businessName).toBe('');
    expect(wrapper.vm.serviceRating).toBeNull();

    // Check if the store mutation was called with the correct data
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('cards/addCard', {
      serviceName: 'Test Service',
      businessName: 'Test Business',
      serviceRating: 3,
    });
  });
});
