import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://stage-api.penpencil.co';
const ENDPOINT = '/crm/helpcentre/conversation/initiate';

// Replace with valid stage token
const AUTH_TOKEN = 'YOUR_VALID_TOKEN';

test.describe('Help Centre – Initiate Conversation API', () => {

  test('TC-01: Should initiate conversation successfully', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.success).toBe(true);
    expect(body.statusCode).toBe(201);
    expect(body.data.success).toBe(true);
    expect(body.data.conversationId).toBeTruthy();
    expect(Array.isArray(body.data.conversation)).toBe(true);
  });

  test('TC-02: Should validate response schema', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const body = await response.json();

    expect(body).toHaveProperty('statusCode');
    expect(body).toHaveProperty('success');
    expect(body).toHaveProperty('data');

    expect(body.data).toHaveProperty('success');
    expect(body.data).toHaveProperty('conversationId');
    expect(body.data).toHaveProperty('conversation');
    expect(body.data).toHaveProperty('existing');
  });

  test('TC-03: Should validate conversationId UUID format', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const body = await response.json();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    expect(body.data.conversationId).toMatch(uuidRegex);
  });

  test('TC-04: Should return existing=true for duplicate request', async ({ request }) => {
    const firstResponse = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const firstBody = await firstResponse.json();

    const secondResponse = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const secondBody = await secondResponse.json();

    expect(secondBody.data.existing).toBe(true);
    expect(secondBody.data.conversationId).toBe(firstBody.data.conversationId);
  });

  test('TC-05: Should return empty conversation array on initiation', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const body = await response.json();

    expect(body.data.conversation.length).toBe(0);
  });

  test('TC-06: Should fail without authentication token', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`);

    expect([401, 403]).toContain(response.status());
  });

  test('TC-07: Should fail with invalid authentication token', async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: 'Bearer INVALID_TOKEN',
      },
    });

    expect([401, 403]).toContain(response.status());
  });

  test('TC-08: Should validate API response time', async ({ request }) => {
    const startTime = Date.now();

    const response = await request.post(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    });

    const endTime = Date.now();
    const responseTime = endTime - startTime;

    expect(response.status()).toBe(201);
    expect(responseTime).toBeLessThan(2000);
  });

});