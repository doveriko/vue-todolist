import { shallowMount } from "@vue/test-utils";
import SearchFilter from "@/components/Filters/SearchFilter.vue";

describe("Mounted SearchFilter", () => {
  const wrapper = shallowMount(SearchFilter);

  it("component exists", () => {
    expect(wrapper.exists()).toBe(true);
  });

  // it("contains certain text", () => {
  //   expect(wrapper.html()).toContain("Search your task");
  // });

  // it("has an input", () => {
  //   expect(wrapper.find("input").exists()).toBe(true);
  // });

  // it("search input is initially empty", () => {
  //   expect(wrapper.vm.search).toBe(null);
  // });

  // it("search input is correctly filled", async () => {
  //   wrapper.setData({ search: "Iyo" });
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.vm.search).toContain("Iyo");
  // });
});
