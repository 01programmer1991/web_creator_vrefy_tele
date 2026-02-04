const BACKEND_URL = "https://api.onlix.xyz";  // Ubah sesuai backend kamu

async function startLogin(phone) {
    const res = await fetch(`${BACKEND_URL}/start-login`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
    });

    const data = await res.json();

    // jangan throw dulu, biar UI bisa baca pesan backend
    return {
        ok: res.ok,
        data
    };
}

async function verifyOtp(phone, code) {
    const res = await fetch(`${BACKEND_URL}/verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code })
    });

    return res.json();
}

async function verifyPassword(phone, password) {
    const res = await fetch(`${BACKEND_URL}/verify-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password })
    });
    return res.json();
}