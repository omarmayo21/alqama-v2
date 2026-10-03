async function verifyEndpoints() {
  console.log('🌐 Verifying Local Dev Server Endpoints...\n');

  const routes = ['/', '/en', '/sports', '/offers', '/studio'];
  for (const route of routes) {
    try {
      const res = await fetch(`http://localhost:5173${route}`);
      const text = await res.text();
      console.log(`  ✅ [${res.status}] http://localhost:5173${route} - Size: ${text.length} bytes (HTML valid: ${text.includes('id="root"')})`);
    } catch (err) {
      console.error(`  ❌ Failed to fetch http://localhost:5173${route}:`, err.message);
    }
  }
}

verifyEndpoints();
