import { shallowMount } from "@vue/test-utils";
import ToDoList from "@/components/ToDoList.vue";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

describe("CRUD operations", () => {
  const mountFunction = (options) => {
    return shallowMount(ToDoList, {
      ...options,
    });
  };

  var getters = {
    allItems: () => [],
  };

  var mockStore = new Vuex.Store({
    getters,
  });

  var wrapper = mountFunction({
    store: mockStore,
  });

  test("Component mounts", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("List of items is originally empty", () => {
    expect(wrapper.vm.allItems).toStrictEqual([]);
    expect(wrapper.html()).toContain("Your list is empty");
  });

  it("List of items is originally empty", () => {
    let itemMock = [
      {
        id: 1,
        input: "My first task",
        completed: false,
      },
    ];

    getters = {
      allItems: () => itemMock,
    };

    mockStore = new Vuex.Store({
      getters,
    });

    wrapper = mountFunction({
      store: mockStore,
    });

    // expect(wrapper.vm.allItems).toStrictEqual([]);
    // await wrapper.setData({ allItems: itemMock });
    // await wrapper.vm.$nextTick();
    expect(wrapper.vm.allItems).toEqual(expect.arrayContaining(itemMock));
  });
});
