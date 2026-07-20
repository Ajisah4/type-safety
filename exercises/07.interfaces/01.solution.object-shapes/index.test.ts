import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('getProductSummary is exported', () => {
	assert.ok(
		'getProductSummary' in solution,
		'🚨 Make sure you export "getProductSummary" - add: export { getProductSummary, ... }',
	)
})

await test('product is exported', () => {
	assert.ok(
		'product' in solution,
		'🚨 Make sure you export "product" - add: export { product, ... }',
	)
})

await test('productWithDesc is exported', () => {
	assert.ok(
		'productWithDesc' in solution,
		'🚨 Make sure you export "productWithDesc" - add: export { productWithDesc, ... }',
	)
})

await test('getProductSummary should format products correctly', () => {
	const noDescResult = solution.getProductSummary(solution.product)
	const withDescResult = solution.getProductSummary(solution.productWithDesc)

	assert.ok(
		noDescResult.includes(solution.product.name) &&
			noDescResult.includes(String(solution.product.price)),
		'🚨 The summary should include the product name and price',
	)
	assert.match(
		noDescResult,
		/no description/i,
		'🚨 The summary should clearly indicate when no description is available',
	)
	assert.ok(
		withDescResult.includes(solution.productWithDesc.name) &&
			withDescResult.includes(String(solution.productWithDesc.price)) &&
			withDescResult.includes(solution.productWithDesc.description ?? ''),
		'🚨 The summary should include the product name, price, and description',
	)
	assert.notStrictEqual(
		noDescResult,
		withDescResult,
		'🚨 getProductSummary should produce different output when description is present vs absent',
	)
})

await test('Product interface should include status union type', () => {
	assert.ok(
		solution.product.status === 'active' ||
			solution.product.status === 'inactive' ||
			solution.product.status === 'discontinued',
		'🚨 product.status should be one of: "active", "inactive", or "discontinued" - verify your Product interface includes status property with union type',
	)
	assert.ok(
		solution.productWithDesc.status === 'active' ||
			solution.productWithDesc.status === 'inactive' ||
			solution.productWithDesc.status === 'discontinued',
		'🚨 productWithDesc.status should be one of: "active", "inactive", or "discontinued" - verify your Product interface includes status property with union type',
	)
})

await test('Product interface should allow optional description', () => {
	assert.strictEqual(
		solution.product.description === undefined,
		true,
		'🚨 product.description should be undefined when not provided - verify description is optional in Product interface',
	)
	assert.strictEqual(
		solution.productWithDesc.description,
		'Has description',
		'🚨 productWithDesc.description should be "Has description" when provided - verify description is optional in Product interface',
	)
})
