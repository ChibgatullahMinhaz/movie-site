import { db } from "../../config/firebase.admin.js";

export const clearExpiredBans = async () => {
    const now = new Date().toISOString();
    const usersSnapshot = await db.collection("users")
        .where("ban.type", "==", "temporary")
        .where("ban.expiresAt", "<=", now)
        .get();

    if (usersSnapshot.empty) {
        console.log("No expired bans found at", new Date().toLocaleString());
        return;
    }

    const batch = db.batch();
    usersSnapshot.forEach(doc => {
        batch.update(doc.ref, { ban: null });
        console.log(`Unbanned user: ${doc.id}`);
    });

    return await batch.commit();
};