using System;
using System.Reflection;

namespace AMSoft.CloudOffice.Domain.Base
{

    public abstract class BaseEntity<TId>
    {
        public virtual TId Id { get; set; }

        public string Name { get; set; }

        private DateTime? _createdDate;

        public DateTime CreatedDate
        {
            get { return _createdDate ?? DateTime.UtcNow; }
            set { _createdDate = value; }
        }

        public DateTime? ModifiedDate { get; set; }

        public string CreatedBy { get; set; }

        public string ModifiedBy { get; set; }

        public byte[] Version { get; set; }


        public override bool Equals(object obj)
        {
            return Equals(obj as BaseEntity<TId>);
        }

        private static bool IsTransient(BaseEntity<TId> obj)
        {
            return obj != null && Equals(obj.Id, default(TId));
        }

        private Type GetUnproxiedType()
        {
            return GetType();
        }

        public virtual bool Equals(BaseEntity<TId> other)
        {
            if (other == null)
                return false;

            if (ReferenceEquals(this, other))
                return true;

            if (!IsTransient(this) &&
                !IsTransient(other) &&
                Equals(Id, other.Id))
            {
                var otherType = other.GetUnproxiedType();
                var thisType = GetUnproxiedType();
                return thisType.GetTypeInfo().IsAssignableFrom(otherType.GetTypeInfo()) ||
                        otherType.GetTypeInfo().IsAssignableFrom(thisType.GetTypeInfo());
            }

            return false;
        }

        public override int GetHashCode()
        {
            if (Equals(Id, default(TId)))
                return base.GetHashCode();
            return Id.GetHashCode();
        }

        public static bool operator ==(BaseEntity<TId> x, BaseEntity<TId> y)
        {
            return Equals(x, y);
        }

        public static bool operator !=(BaseEntity<TId> x, BaseEntity<TId> y)
        {
            return !(x == y);
        }
    }
}
