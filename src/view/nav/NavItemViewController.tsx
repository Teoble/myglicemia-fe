const useNavItemViewController = () => {
  const getNavClassNames = (selected: boolean) => {
    const classNamesArray = ['nav__item'];

    if (selected) {
      classNamesArray.push('nav__item--selected');
    }

    return classNamesArray.join(' ');
  };

  return { getNavClassNames };
};

export default useNavItemViewController;
