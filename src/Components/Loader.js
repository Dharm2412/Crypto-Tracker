import React from "react";

export default function Loader() {
  return (
    <div>
      <div class="min-h-screen bg-white">
        <header class="bg-gray-300 py-8">
          <div class="max-w-4xl mx-auto px-4">
            <div class="animate-pulse flex items-center space-x-4">
              <div class="h-12 w-12 bg-gray-400 rounded-full"></div>
              <div>
                <div class="h-4 w-20 bg-gray-400 rounded"></div>
                <div class="h-4 w-16 bg-gray-400 rounded mt-2"></div>
              </div>
            </div>
          </div>
        </header>
        <div class="max-w-4xl mx-auto px-4 py-8">
          <div class="animate-pulse space-y-4">
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>

          <div class="animate-pulse space-y-4 mt-12">
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
            <div class="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
