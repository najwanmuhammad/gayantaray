"use client";
import Image from "next/image";

interface PhotoCardProps {
  member: { id: number; name: string; role: string; image: string };
}

export default function PhotoCard({ member }: PhotoCardProps) {
  return (
    <div
      className="relative w-[270px] overflow-hidden md:w-[442px]"
      style={{
        clipPath:
          "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
      }}
    >
      <div className="relative aspect-[3/4] w-full rounded-md">
        <Image
          src={member.image || "/placeholder.svg?height=480&width=360"}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(min-width:768px) 340px, 260px"
          priority
        />
      </div>

      <div className="pt-4">
        <h3 className="h4 text-lime-100">{member.name}</h3>
        <div
          className="mt-3 inline-flex bg-lime-500 px-3 py-2 font-redhat text-[14px] leading-[150%] font-medium text-blue-500 md:text-[20px]"
          style={{
            clipPath:
              "polygon(0% 0%, calc(100% - 14px) 0%, 100% 14px, 100% 100%, 0% 100%)",
          }}
        >
          {member.role}
        </div>
      </div>
    </div>
  );
}
