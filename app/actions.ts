'use server';

export async function submitRSVP(email: string) {
    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME || 'RSVPs';

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { success: false, error: 'Please enter a valid work email address.' };
    }

    if (!apiKey || !baseId) {
        console.error('Airtable configuration missing: Please set AIRTABLE_API_KEY and AIRTABLE_BASE_ID in your environment.');
        return {
            success: false,
            error: 'Server configuration error. Please contact the administrator.'
        };
    }

    try {
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fields: {
                    'Email': email,
                },
            }),
            cache: 'no-store'
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Airtable API Error:', data);

            // Handle specific Airtable errors if needed
            if (response.status === 401) {
                return { success: false, error: 'Authentication failed with Airtable.' };
            }

            return { success: false, error: data.error?.message || 'Failed to save RSVP to Airtable.' };
        }

        return { success: true };
    } catch (error) {
        console.error('RSVP Submission Exception:', error);
        return { success: false, error: 'A network error occurred while submitting your RSVP.' };
    }
}
