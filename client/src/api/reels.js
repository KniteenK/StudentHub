import { BASE_URL } from "../config";

const getReels = async (token, query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/reels?" + new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getReel = async (reelId, token) => {
  try {
    const res = await fetch(BASE_URL + "api/reels/" + reelId, {
      headers: {
        "x-access-token": token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const createReel = async (reel, user) => {
  try {
    const res = await fetch(BASE_URL + "api/reels", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(reel),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateReel = async (reelId, user, data) => {
  try {
    const res = await fetch(BASE_URL + "api/reels/" + reelId, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteReel = async (reelId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/reels/" + reelId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const likeReel = async (reelId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/reels/like/" + reelId, {
      method: "POST",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const unlikeReel = async (reelId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/reels/like/" + reelId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUserLikedReels = async (likerId, token, query) => {
  try {
    const res = await fetch(
      BASE_URL +
        "api/reels/liked/" +
        likerId +
        "?" +
        new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUserReels = async (userId, token, query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/reels/user/" + userId + "?" + new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getReelComments = async (reelId) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/reel/" + reelId);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createReelComment = async (comment, reelId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/reel/" + reelId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(comment),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateReelComment = async (commentId, user, data) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/reel/" + commentId, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteReelComment = async (commentId, user) => {
  try {
    const res = await fetch(BASE_URL + "api/comments/reel/" + commentId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  createReel,
  deleteReel,
  getReel,
  getReels,
  getUserLikedReels,
  getUserReels,
  likeReel,
  unlikeReel,
  updateReel,
  getReelComments,
  createReelComment,
  updateReelComment,
  deleteReelComment,
};