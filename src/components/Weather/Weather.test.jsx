import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render clear", async () => {
    // AAA - Arrange Act Aassert
    const { findByRole } = render(<Weather temperature={10} state="clear" />);

    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
})

test("Weather render cloud", async () => {
    // AAA - Arrange Act Aassert
    const { findByRole } = render(<Weather temperature={10} state="cloud" />);

    const temp = await findByRole("heading");

    expect(temp).toHaveTextContent("10");
})