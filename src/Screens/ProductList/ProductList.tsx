import { Header, SafeAreaStatusBar, SafeAreaViewCus } from 'components';
import React from 'react';
import globalStyles from 'theme/globalStyles';

const ProductList = () => {
    
    return (
        <>
        <SafeAreaStatusBar backgroundColor="transparent" />
        <SafeAreaViewCus style={[globalStyles.bgWhite, globalStyles.flex1]}>
          <Header
            title={'Product Details'}
          />
        </SafeAreaViewCus>
      </>
    );
};

export default ProductList;