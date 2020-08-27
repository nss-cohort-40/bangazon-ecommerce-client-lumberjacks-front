import React from 'react';

const ProductTypeDropdown = props => {
    const { productTypes, selectedProductTypeIdChange, selectedProductTypeId } = props;
    return (
        <select type="dropdown"
            name="description"
            className="form-control"
            onChange={selectedProductTypeIdChange}
            required>
                {
                    selectedProductTypeId === 0 
                    ? (
                        <option>Select Category</option>
                    )
                    : (   
                        ''
                    )
                }
                {
                    productTypes.map((singleProductType) => (
                    <option 
                        key={singleProductType.id}
                        value={singleProductType.id}>
                            {singleProductType.name}
                    </option>
                    ))
                }
        </select>
    )
}



export default ProductTypeDropdown;