import { mount } from "@vue/test-utils";
import SearchFilter from "@/components/Filters/SearchFilter.vue";

describe("Mounted SearchFilter", () => {
  const wrapper = mount(SearchFilter);

  test("does a wrapper exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain("Search your task");
  });
});
