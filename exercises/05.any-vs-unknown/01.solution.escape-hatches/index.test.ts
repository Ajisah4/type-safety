import assert from 'node:assert/strict'
import { test } from 'node:test'
import * as solution from './index.ts'

await test('safeProcess is exported', () => {
	assert.ok(
		'safeProcess' in solution,
		'🚨 Make sure you export "safeProcess" - add: export { safeProcess }',
	)
})

await test('safeProcess should handle string values', () => {
	assert.strictEqual(
		solution.safeProcess('hello'),
		'HELLO',
		'🚨 safeProcess should uppercase string inputs',
	)
	assert.strictEqual(
		solution.safeProcess('test'),
		'TEST',
		'🚨 safeProcess should uppercase string inputs',
	)
	assert.strictEqual(
		solution.safeProcess(''),
		'',
		'🚨 safeProcess should handle empty strings',
	)
})

await test('safeProcess should handle number values', () => {
	assert.strictEqual(
		solution.safeProcess(123),
		'123.00',
		'🚨 safeProcess should format numbers to two decimal places',
	)
	assert.strictEqual(
		solution.safeProcess(0),
		'0.00',
		'🚨 safeProcess should format zero to two decimal places',
	)
	assert.strictEqual(
		solution.safeProcess(3.14159),
		'3.14',
		'🚨 safeProcess should round numbers to two decimal places',
	)
})

await test('safeProcess should handle boolean values', () => {
	assert.strictEqual(
		solution.safeProcess(true),
		'true',
		'🚨 safeProcess should turn booleans into lowercase true/false strings',
	)
	assert.strictEqual(
		solution.safeProcess(false),
		'false',
		'🚨 safeProcess should turn booleans into lowercase true/false strings',
	)
})

await test('safeProcess should handle other types', () => {
	assert.strictEqual(
		solution.safeProcess(null),
		'null',
		'🚨 safeProcess should stringify null',
	)
	assert.strictEqual(
		solution.safeProcess(undefined),
		'undefined',
		'🚨 safeProcess should stringify undefined',
	)
	assert.strictEqual(
		solution.safeProcess({}),
		'[object Object]',
		'🚨 safeProcess should stringify plain objects',
	)
})
