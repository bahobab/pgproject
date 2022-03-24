# React Product Gallery

This is my approach to the challenge.
For sure there are many features to be added/implemented.

If time permitted, I Could have added:
- Test for category checkbox to test the category selection/deselection
- Test for the modal showing/closing
- Loading spinner of indication for the Categories and the Products components
- etc..

# Performance issues

I wanted to call your attention on the implementation for category selection that updates the products list.
It does not look efficient since the time complexity for getting the products by category seems to like N*M which is the of the quadratic order ([].filter inside [].forEch will create this situation):

N: size of caetegories array
M: size of products array

When numbers scale the performance of the rendering the component will take a hit.

So this calls for perfomance optimiation with different algorithm to build the products list when checking the categories.

The code fragment:

'React.useEffect(() => {
    if (checkedCat.length === 0) {
      setDisplayProducts(products);
      return
    }
    let selectedProds = [];
    checkedCat.forEach(catId => {
      const  filteredProds = products.filter(prod => prod.categoryId === Number(catId));
      selectedProds = [...selectedProds, ...filteredProds];
    })
    setDisplayProducts(selectedProds);
  }, [checkedCat]);`

Thank you

# How to run

- Clone this repo via `git clone https://github.com/bahobab/pgproject`
- `cd pgproject` and install dependencies via `yarn install`
- Execute `yarn start` to begin the development server.
- You should be able to reach the project at http://localhost:3000/
